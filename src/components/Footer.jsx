const Footer = () => {
    var year = new Date();
  return (
    <footer>
      <div className="w-full flex justify-center bg-[#10172a] p-3">
        <span className="text-lg text-white">©{year.getFullYear()} All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer
