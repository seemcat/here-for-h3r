import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { providerOptions } from "../providerOptions";
import { useRouter } from "next/router";

function Logout() {
  if (typeof window !== "undefined") {
    const web3Modal = new Web3Modal({
      providerOptions,
    });
    const router = useRouter();

    const logout = async () => {
      await web3Modal.clearCachedProvider();
    };

    useEffect(() => {
      logout();
      router.push("/login");
    }, []);
    return "";
  }
  return "";
}

export default Logout;
