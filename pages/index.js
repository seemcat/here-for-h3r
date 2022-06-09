/* pages/index.js */
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [nfts, setNFTs] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  const texas = {
    name: "Here for H3R NFT",
    description: "Data Sources for H3R",
    attributes: [
      {
        trait_type: "Unique State Texas",
        value:
          "Abortions in Texas are banned after six weeks—a time before many people even know they are pregnant, also known as the Texas Heartbeat Act, abortion clinics have had to [turn away people](https://www.verywellhealth.com/texas-abortion-ban-clinic-5201628) seeking an abortion after six weeks.\n\n“So your only option for seeking an abortion [after six weeks] at this point would be to attempt to obtain services out of state.”\n\n“So the ban on abortion here has tremendous impact,” Sepper says. “And the cost fall with the greatest weight on women who are already disadvantaged because of the fact that they live in rural areas, their immigration status, poverty status, or the color of their skin.” Wealthy White women will still be able to access abortion, she adds.\n\n([https://www.verywellhealth.com/texas-abortion-ban-clinic-5201628](https://www.verywellhealth.com/texas-abortion-ban-clinic-5201628))\n\nYou can find any licensed clinic in your state or a nearby state that provide safe abortion here: [https://www.abortionfinder.org/](https://www.abortionfinder.org/)",
      },
    ],
    image:
      "ipfs://bafybeiexrzhn5yjpadvk3btjn3pxk54h4fpkshlcmd6asc7udumf4i5b5u/Metadata",
  };

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

  const [formInput, updateFormInput] = useState({ state: "" });

  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: "3000px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="border shadow rounded-xl overflow-hidden">
            <div className="p-4">
              <p style={{ height: "64px" }} className="text-2xl font-semibold">
                Please enter your State
              </p>
              <input
                placeholder="We're here for you"
                className="mt-8 border rounded p-4"
                onChange={(e) =>
                  updateFormInput({ ...formInput, name: e.target.value })
                }
              />
            </div>
            <div className="p-4 bg-black">
              <button
                className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                onClick={() => console.log("sup")}
              >
                <Link href="/texas">Explore</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
