import WebApi from "@/components/ttsApi/webApi";

export default function Home() {
  return(
    <div>
      <h1 className='text-center text-4xl font-semibold pt-10'>pickByVoice </h1>
      <WebApi/>
    </div>
  );
}