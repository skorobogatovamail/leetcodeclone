import Subtitle from '@/components/Subtitle';
import Title from '@/components/Title';
import React from 'react';

type QuestionsPageProps = {

};

const QuestionsPage: React.FC<QuestionsPageProps> = () => {
    return (
        <div className="px-8 sm:px-20 bg-gradient-to-b from-slate-50 to-white">
            <main className="px-15">
                <section className="py-10 flex flex-col gap-5">
                    <Title text="Master coding interviews with confidence" />
                    <Subtitle
                        className="max-w-[600px]"
                        text="Our platform is tailored to help you to prepare for coding interviews smoothly. 
          Developed by interviewers from top tech companies." />
                </section>
            </main>
        </div>
    )
}
export default QuestionsPage;