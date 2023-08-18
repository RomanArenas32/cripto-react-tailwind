import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const PiePagina = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
      <div className="flex justify-center items-center space-x-2">
        <p>Todos los derechos reservados &copy; 2023</p>
        <a href="https://github.com/RomanArenas32" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-white hover:text-gray-500 text-xl" />
        </a>
      </div>
    </footer>
  );
};
