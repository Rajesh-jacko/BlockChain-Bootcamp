const { ethers } = require("hardhat")
const { expect } = require('chai')

const tokens = (n)=> {
    return ethers.utils.parseUnits(n.toString(), 'ethers')
}


describe("Token", ()=> {
    let token
    beforeEach( async ()=> {
        const Token = await ethers.getContractFactory('Token')
       token = await Token.deploy('Builder Dao', "BLDR" ,  "1000000")

    }) 
    describe('Deployment' ,()=> {
        const name = "Builder Dao"
        const symbol = "BLDR"
        const decimals = 18
        const TotalSupply = tokens('1000000')
        it("has a name", async () => {
            expect (await token.name()).to.equal(name)
        })
        it("has a symbol", async () => {
            expect (await token.symbol()).to.equal(symbol)
        })
    
        it("has a decimal", async () => {
            expect (await token.decimals()).to.equal(decimals)
        })
        
        it("has a TotalSupply", async () => {
            expect (await token.totalSupply()).to.equal(TotalSupply)
        })
    })
    

})
