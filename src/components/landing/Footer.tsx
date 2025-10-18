import { ValorantIcon } from "./icons";

export const Footer = () => {
    return (
        <footer className="border-t border-border/40 py-6 md:py-8">
            <div className="container max-w-screen-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <ValorantIcon className="h-6 w-6 text-primary" />
                    <p className="text-sm text-muted-foreground font-headline">
                        NeonVindicta
                    </p>
                </div>
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} NeonVindicta. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
