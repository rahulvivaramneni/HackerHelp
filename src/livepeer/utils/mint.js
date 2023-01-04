import { videonft } from "@livepeer/video-nft";

const apiOpts = {
    auth: { apiKey: process.env.REACT_APP_LIVEPEERKEY},
    endpoint: videonft.api.prodApiEndpoint,
}

export const mint = async(chainId, title, nftMetadata, setAppState, setMessage, setNftInfo) => {
    const { ethereum } = window
    console.log("ethereum")
    console.log(ethereum)
    console.log("endpoint")
console.log(videonft.api.prodApiEndpoint)
    const minter = new videonft.minter.FullMinter(apiOpts, { ethereum, chainId});
    const file = await minter.uploader.pickFile();

    //Todo: update app state
    setAppState("Minting")
    setMessage("Creating asset")
    let asset = await minter.api.createAsset(title, file);
    setMessage("Export to IPFS")
    const ipfs = await minter.api.exportToIPFS(asset.id, nftMetadata);
    console.log("ipfs "+ipfs)
    console.log(ipfs)
    setMessage("Minting NFT")
    const tx = await minter.web3.mintNft(ipfs.nftMetadataUrl,"0xc7970e9c5aa18a7a9bf21c322bfa8ecebe7b7a26");
    console.log(tx)
    setMessage("Getting NFT Info")
    const nftInfo = await minter.web3.getMintedNftInfo(tx);
    setNftInfo({...nftInfo, ...ipfs})
    setAppState("Minted")
    return nftInfo
}