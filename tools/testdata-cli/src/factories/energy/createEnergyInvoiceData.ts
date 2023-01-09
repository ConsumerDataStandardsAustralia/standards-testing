import { EnergyInvoice, EnergyInvoiceAccountCharges, EnergyInvoiceElectricityUsageCharges, EnergyInvoiceGasUsageCharges } from "consumer-data-standards/energy";
import { Factory, FactoryOptions, Helper } from '../../logic/factoryService'
import { EnergyAccountWrapper } from "../../logic/schema/cdr-test-data-schema";
import { RandomEnergy } from "../../random-generators";

const factoryId: string = "create-energy-invoice-data";

export class CreateEnergyInvoiceData extends Factory {

    constructor(options: FactoryOptions) {
        super(options, factoryId);
    }

    public get briefDescription(): string {
        throw new Error("Method not implemented.");
    }
    public get detailedDescription(): string {
        throw new Error("Method not implemented.");
    }

    public static id: string = factoryId;

    public canCreateEnergyInvoices(): boolean {return true}
    public canCreateEnergyInvoice(): boolean {return true}

    public generateEnergyInvoice(account: EnergyAccountWrapper): EnergyInvoice | undefined {
        let accId = account.account.accountId;
        let issueDate = Helper.randomDateTimeInThePast();
        let invoice: EnergyInvoice = {
            accountId: accId,
            balanceAtIssue: "",
            invoiceNumber: Helper.randomId(),
            issueDate: issueDate,
            paymentStatus: RandomEnergy.EneryInvoicePaymentStatus(),
            servicePoints: this.generateServicePointArray(account)
        }
        if (Math.random() > 0.5) invoice.dueDate = Helper.randomDateTimeAfterDateString(issueDate);
        let invoiceAmount = Helper.generateRandomDecimalInRange(10, 1000);
        let gstAmount = (parseFloat(invoiceAmount)* 0.1).toFixed(2);
        if (Math.random() > 0.5) {
            invoice.invoiceAmount = invoiceAmount;
            invoice.gstAmount = gstAmount;
        }
        if (Math.random() > 0.5) {
            let minDiscount: number = parseFloat(invoiceAmount) * 0.01;
            let maxDiscount: number = parseFloat(invoiceAmount) * 0.25;
            let discountAomunt = Helper.generateRandomDecimalInRange(minDiscount, maxDiscount);
            let gstAmount = (parseFloat(discountAomunt)* 0.1).toFixed(2);
            invoice.payOnTimeDiscount = {
                discountAmount:  discountAomunt,
                gstAmount: gstAmount,
                date:  ''
            }
        }

        if (this.accountHasDemandBasedCharges(account)) {
            let period: any = {};    
            period.startDate = Helper.randomDateTimeBeforeDateString(issueDate, 7, 60);
            period.endDate = Helper.generateRandomDateTimeInRange(period.startDate, issueDate);
            invoice.period = period;
        } 
        if (this.accountHasGasContract(account)) {
            let gasUsageCharges: EnergyInvoiceGasUsageCharges = this.generateGasUsageCharges();
            invoice.gas = gasUsageCharges;

        }
        if (this.accountHasElectricityContract(account)) {
            let electricityUsageCharges: EnergyInvoiceElectricityUsageCharges = this.generateElectricityUsageCharges();
            invoice.electricity = electricityUsageCharges;
            invoice.accountCharges = this.generateAccountCharges();
        }
        return invoice;
    }

    public generateEnergyInvoices(account: EnergyAccountWrapper): EnergyInvoice[] | undefined {
        let count = Helper.isPositiveInteger(this.options.options?.count) ? (this.options.options?.count as number) : 1;

        let ret: EnergyInvoice[] = [];
        for (let i = 0; i < count; i++) {
            const el = this.generateEnergyInvoice(account);
            if (el) ret.push(el);
        }
        return ret;
    }

    private accountHasGasContract(account: EnergyAccountWrapper) : boolean {
        return  account.account.plans.findIndex((x:any) => x.planDetail?.gasContract) > -1
    }

    private accountHasElectricityContract(account: EnergyAccountWrapper) : boolean {
        return  account.account.plans.findIndex((x:any) => x.planDetail?.electricityContract) > -1
    }

    private accountHasDemandBasedCharges(account: EnergyAccountWrapper): boolean {
        let electricityDemandCharges = account.account.plans.find(x => x.planDetail?.electricityContract?.tariffPeriod.find(x => x.demandCharges != undefined));
        let gasDemandCharges = account.account.plans.find(x => x.planDetail?.gasContract?.tariffPeriod.find(x => x.demandCharges != undefined));
        return ((electricityDemandCharges != undefined)|| (gasDemandCharges != undefined));
    }

    private generateGasUsageCharges(): EnergyInvoiceGasUsageCharges {
        let charges: EnergyInvoiceGasUsageCharges = {
            totalGenerationCredits: "",
            totalOnceOffCharges: "",
            totalOnceOffDiscounts: "",
            totalUsageCharges: ""
        }
        return charges;
    }

    private generateElectricityUsageCharges() : EnergyInvoiceElectricityUsageCharges{
        let charges: EnergyInvoiceElectricityUsageCharges = {
            totalGenerationCredits: "",
            totalOnceOffCharges: "",
            totalOnceOffDiscounts: "",
            totalUsageCharges: ""
        }
        return charges;     
    }

    private generateAccountCharges(): EnergyInvoiceAccountCharges {
        let charges: EnergyInvoiceAccountCharges = {
            totalCharges: "",
            totalDiscounts: ""
        }
        return charges;
    }

    private generateServicePointArray(account: EnergyAccountWrapper): string[] {
        let sp: string[] = [];
        let electricitySp = account.account.plans.find(x => x.planDetail?.electricityContract)?.servicePointIds;
        if(electricitySp != undefined) {sp.push(...electricitySp)}
        return sp;
    }
}
