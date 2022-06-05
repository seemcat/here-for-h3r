import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { providerOptions } from "../providerOptions";
import { useRouter } from "next/router";

function Login(props) {
  if (typeof window !== "undefined") {
    const web3Modal = new Web3Modal({
      providerOptions,
    });
    const router = useRouter();
    const [provider, setProvider] = useState();
    const [connection, setConnection] = useState();

    const login = async () => {
      try {
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const users = await provider.listAccounts();
        const signer = provider.getSigner();
        setProvider(provider);
        setConnection(connection);
        if (signer) console.log("Yay we're logged in: ", users[0]);
      } catch (error) {
        console.log(error);
      }
    };

    const refreshState = () => {
      setUser();
      setSigner();
    };

    useEffect(() => {
      if (web3Modal.cachedProvider) {
        login();
      }
    }, []);

    useEffect(() => {
      if (connection?.on) {
        router.push("/");
      }
      login();
    });
    return "";
  }
  return "";
}

export default Login;
