
/**
 * 
 * @param data 
 * initial amount
 * annual contribution
 * expected return
 * duration
 */


type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number; 
};

type invetsmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
};

type calculationResult = invetsmentResult[] | string;

// => result[]
function calculateInvestment(data: InvestmentData): calculationResult{
    const {initialAmount, annualContribution, expectedReturn, duration} = data;
    if(initialAmount<=0){
        return 'Initial investment amount must be greater than zero.';
    }

    if(duration<1){
        return "Invalid duration.";
    }

    if(expectedReturn<0){
        return 'Expected return must be at least 0.';
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: invetsmentResult[] = [];

    for(let i=0; i<duration; i++){
        total = total * (1+expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;

        annualResults.push({
            year: `Year ${i+1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }

    return annualResults;

}

function printResults(results:calculationResult){
    if(typeof results === 'string'){
        console.log(results);
        return;
    }

    for(const yearEndResult of results){
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total interest earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('-----------------------')
    }
}

const inverstmentData : InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
};

const results = calculateInvestment(inverstmentData);

printResults(results);