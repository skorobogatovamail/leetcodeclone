import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-8 sm:px-20 bg-gradient-to-b  from-slate-50 to-white">
      <main className="flex ">
        <Title text="master coding questions" />
        <Subtitle
          className="max-w-[600px"
          text="browse out collection of various coding tasks"
        />
        <Link href="/questions">
          <Button size='lg' className="gap-1">
            <span>Browse Questions</span>
            <ArrowRight />
          </Button>
        </Link>
      </main>
    </div>
  );
}
