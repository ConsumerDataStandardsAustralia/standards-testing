import { EnergyInvoice, EnergyInvoiceAccountCharges, EnergyInvoiceElectricityUsageCharges, EnergyInvoiceGasUsageCharges } from "consumer-data-standards/energy";
import { Factory, FactoryOptions, Helper } from '../../logic/factoryService'
import { EnergyAccountWrapper } from "../../logic/schema/cdr-test-data-schema";
import { RandomEnergy } from "../../random-generators";

const factoryId: string = "create-energy-invoice-data";

export class CreateEnergyInvoiceData extends Factory {

    constructor(options: FactoryOptions) {
        super(options, factoryId);
        this.minInvoiceAmount  = options?.options?.minInvoiceAount ?  options?.options?.minInvoiceAount as number : 10;
        this.maxInvoiceAmount  = options?.options?.maxInvoiceAmount ?  options?.options?.maxInvoiceAmount as number : 1000;
    }

    private minInvoiceAmount: number;
    private maxInvoiceAmount: number;

    public get briefDescription(): string {
        return "Create a number of energy invoices for an energy account ";
    }
    public get detailedDescription(): string {
        let st = `This library will accept the following options:\n
        count:\tThe number of invoices to be issued for each account
        minInvoiceAmount:\tThe minimum amount for each invoice (default: 10)
        maxInvoiceAmount:\tThe maximum amount for each invoice (default: 1000) \n
Key values randomly allocated:
        The payment status for the each invoice\n`
        return st;
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
        let invoiceAmount = Helper.generateRandomDecimalInRange(this.minInvoiceAmount, this.maxInvoiceAmount);
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
                date:  invoice.dueDate ? Helper.randomDateTimeBeforeDateString(invoice.dueDate) : Helper.randomDateTimeInThePast()
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
            totalGenerationCredits: Helper.generateRandomDecimalInRange(100, 200),
            totalOnceOffCharges: Helper.generateRandomDecimalInRange(100, 200),
            totalOnceOffDiscounts: Helper.generateRandomDecimalInRange(100, 200),
            totalUsageCharges: Helper.generateRandomDecimalInRange(100, 200)
        }
        if (Math.random()> 0.5) {
            let otherCharges: any = {
                amount: Helper.generateRandomDecimalInRange(100, 200),
                description: 'Mandatory description for other charges'
            };
            if (Math.random()> 0.25) otherCharges.type = RandomEnergy.OtherUsageChargesType();
            charges.otherCharges = otherCharges;
        }
        if (Math.random()> 0.25) {
            let gst = parseFloat(charges.totalUsageCharges) * 0.1;
            charges.totalGst = gst.toFixed(2)
        }
        return charges;  
    }

    private generateElectricityUsageCharges() : EnergyInvoiceElectricityUsageCharges{
        let charges: EnergyInvoiceElectricityUsageCharges = {
            totalGenerationCredits: Helper.generateRandomDecimalInRange(100, 200),
            totalOnceOffCharges: Helper.generateRandomDecimalInRange(100, 200),
            totalOnceOffDiscounts: Helper.generateRandomDecimalInRange(100, 200),
            totalUsageCharges: Helper.generateRandomDecimalInRange(100, 200)
        }

        if (Math.random()> 0.5) {
            let otherCharges: any = {
                amount: Helper.generateRandomDecimalInRange(100, 200),
                description: 'Mandatory description for other charges'
            };
            if (Math.random()> 0.25) otherCharges.type = RandomEnergy.OtherUsageChargesType();
            charges.otherCharges = otherCharges;
        }
        if (Math.random()> 0.25) {
            let gst = parseFloat(charges.totalUsageCharges) * 0.1;
            charges.totalGst = gst.toFixed(2)
        }
        return charges;     
    }

    private generateAccountCharges(): EnergyInvoiceAccountCharges {
        let charges: EnergyInvoiceAccountCharges = {
            totalCharges: Helper.generateRandomDecimalInRange(100, 200),
            totalDiscounts: Helper.generateRandomDecimalInRange(100, 200)
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
