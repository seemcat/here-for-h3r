/* pages/index.js */
import { useEffect, useState } from "react";

export default function Home() {
  const [nfts, setNFTs] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setLoadingState(true);
    fetch(
      //"https://api.nftport.xyz/v0/nfts/0xFe4B6890459312e44F5c611C1ecAbF03e535e60a?chain=polygon",
      "https://api.nftport.xyz/v0/nfts/0x12f28e2106ce8fd8464885b80ea865e98b465149?chain=ethereum",
      {
        headers: new Headers({
          Authorization: "8b01d33a-74a2-4950-8cf9-6a110c766720",
          "Content-Type": "application/json",
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setNFTs(data.nfts);
        setLoadingState(false);
      });
  }, []);

  if (loadingState === "loaded" && !nfts.length)
    return <h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>;

  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/25e83a6f-4a50-4646-b789-ce9cdc871276/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220605T054941Z&X-Amz-Expires=86400&X-Amz-Signature=5c5e298cdaa7290627f551b7e26c79b999ddce796f4676df04d0654e95c6c891&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" />
              <div className="p-4">
                <p
                  style={{ height: "64px" }}
                  className="text-2xl font-semibold"
                >
                  State
                </p>
                <div style={{ height: "70px", overflow: "hidden" }}>
                  <p className="text-gray-400">{nft.chain}</p>
                </div>
              </div>
              <div className="p-4 bg-black">
                <p className="text-2xl font-bold text-white">
                  Content
                </p>
                <button
                  className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                  onClick={() => console.log("sup")}
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
