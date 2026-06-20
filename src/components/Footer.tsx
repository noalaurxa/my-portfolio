import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-white border-t py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
