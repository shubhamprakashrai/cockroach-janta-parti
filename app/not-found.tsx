import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-bg flex flex-col items-center justify-center p-4 text-center">

            <div className="relative mb-12">
                <div className="text-[15rem] md:text-[20rem] leading-none opacity-80 filter grayscale mix-blend-screen drop-shadow-[16px_16px_0_#FFF]">
                    🪳
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-alert text-white font-display text-8xl md:text-[10rem] px-8 py-2 border-8 border-black rotate-12 shadow-[16px_16px_0_0_#000]">
                    404
                </div>
            </div>

            <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-rich-black mb-4 z-10 w-full max-w-3xl">
                PAGE IS ALSO <span className="text-accent underline decoration-8 underline-offset-8">UNEMPLOYED.</span>
            </h1>

            <p className="font-mono text-xl text-text-secondary uppercase font-bold bg-black px-6 py-3 border-4 border-text-primary mb-10 z-10 max-w-xl">
                404. Iska bhi job nahi mila. It probably deflected to a different party.
            </p>

            <Link
                href="/"
                className="bg-accent text-black font-display text-3xl md:text-4xl uppercase px-12 py-5 border-4 border-black hover:bg-white hover:-translate-y-1 shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all z-10"
            >
                GO HOME → FIND A JOB
            </Link>

        </main>
    );
}
