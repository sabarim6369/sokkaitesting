import Image from "next/image";
import Homepage from "../../components/Homepage/Homepage";
export default function Home() {
  // useEffect(() => {
  //   window.otpless = (otplessUser) => {
  //     alert(JSON.stringify(otplessUser));
  //   };
  // }, []);

  return (
    <div>
      <div id="otpless-login-page"></div>
      <Homepage />
    </div>
  );
}
