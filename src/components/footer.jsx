function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-12">
      <p className="text-center text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-800">
          Ma. Elaine V. Eliang
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
