truffle console

let task = "Convert 100 KNC to OMG"

console.log(task)

let userWallet = '0x47a793D7D0AA5727095c3Fe132a6c1A46804c8D2'

let tradeInstance = await Trade.at(Trade.address)

let omgInstance = await OmiseGo.at(OmiseGo.address)

let kncInstance = await KyberNetworkCrystal.at(KyberNetworkCrystal.address)

let kncBalance1 = (await kncInstance.balanceOf(userWallet)).toString()

let omgBalance1 = (await omgInstance.balanceOf(userWallet)).toString()

kncBalance1

omgBalance1

await kncInstance.approve(tradeInstance.address, web3.utils.toWei("1000000"), {from:userWallet})

tradeInstance.execSwap(kncInstance.address, web3.utils.toWei("100"), omgInstance.address, userWallet, web3.utils.toWei("1000000"), {from: userWallet})

kncBalance1
omgBalance1
