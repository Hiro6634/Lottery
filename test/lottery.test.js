const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 =  require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode} = require('../compile');

let accounts;
let lottery;

beforeEach( async() => {
    accounts = await web3.eth.getAccounts();

    lottery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: [] })
        .send( {from: accounts[0], gas: '1000000'});
});

describe('Lottery', () => {
    it('deploys a contract', () => {
        assert.ok(lottery.options.address);
    }); 

    it('assign manager account', () => {
        // console.log(lottery);
        console.log("MANAGER:");

    });
    //     console.log("Manager:", lottery.manager);
    //     //console.log(accounts[0]);
    //     //assert.equal(lottery.manager, accounts[0]);
    // });
});


