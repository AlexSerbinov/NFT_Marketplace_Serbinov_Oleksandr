const NFT = artifacts.require('../contracts/NFT.sol');
const ownerAddres = '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe';

contract('NFT', async () => {
  beforeEach(async (ctx) => {
    const nft = await NFT.new('test NFT', 'TNFT');
    console.log(' ------------ line 0 ------------');
  });
  console.log(' ------------ line 0.5 ------------');

  it('Should mint NFT token for given user', async () => {
    console.log(' ------------ line 1 ------------');
    const mint = await nft.mintNft(ownerAddres); //.then(console.log);
    expect(mint).toBeDefined();
  });

  it('Should return token balance for given user', async () => {
    const balance = await nft.balanceOf(ownerAddres).then(console.log);
  });
});

// сорри, уезжаю, не успеваю закончить (
