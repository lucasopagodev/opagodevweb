export default function Header() {
  return (
    <header>
      <div
        id="header"
        className="flex flex-row justify-end sm:justify-center md:justify-end space-x-4"
      >
        <p>
          <a href="https://www.youtube.com/@opagodev" target="_blank">
            Youtube
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/lucas-fernandes-lopes/"
            target="_blank"
          >
            Linkedin
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com/opagodev/" target="_blank">
            Instagram
          </a>
        </p>
        <p>
          <a href="#cv">
            CV
          </a>
        </p>
      </div>
    </header>
  );
}
