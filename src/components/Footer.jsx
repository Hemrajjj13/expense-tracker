import { GithubIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        
        {/* Name */}
        <p className="font-medium text-gray-800">
          Built by Hemraj Suryawanshi
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Hemrajjj13/expense-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-black transition"
          >
            <GithubIcon size={18} />
            Source Code
          </a>

          <a
            href="https://linkedin.com/in/hemrajsuryawanshi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;