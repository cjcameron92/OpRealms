import Image from 'next/image'
import logo from "@/../public/logo.png"
export default function Home() {
  return (
    <div className="min-h-screen bg-opstone flex flex-col items-center justify-center">
      <Image src={logo} alt="OpRealms Logo" width={200} height={200} />
      <h1 className="text-4xl font-bold text-opred mt-4">Welcome to OpRealms</h1>
      <div className="mt-8 max-w-2xl text-center text-opgreen">
        <h2 className="text-2xl font-semibold mb-4">How to Join</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-opred">Java Edition</h3>
          <p className="mt-2">1. Open Minecraft and click on 'Multiplayer'</p>
          <p>2. Click on 'Add Server'</p>
          <p>3. Enter the server address: <span className="font-bold">java.oprealms.com</span></p>
          <p>4. Click 'Done' and join the server</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mt-6">
          <h3 className="text-xl font-bold text-opred">Bedrock Edition</h3>
          <p className="mt-2">1. Open Minecraft and click on 'Play'</p>
          <p>2. Click on 'Servers' tab</p>
          <p>3. Click on 'Add Server'</p>
          <p>4. Enter the server address: <span className="font-bold">bedrock.oprealms.com</span></p>
          <p>5. Enter the port: <span className="font-bold">19132</span></p>
          <p>6. Click 'Save' and join the server</p>
        </div>
      </div>
    </div>
  )
}
