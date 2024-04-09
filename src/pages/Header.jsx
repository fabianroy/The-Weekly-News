import moment from 'moment';

const Header = () => {
    return (
        <div className="py-10">
            <h2 className="text-6xl text-center font-heading">The Weekly Star</h2>
            <p className="mt-4 text-xl text-center">Journalism Without Fear or Favour</p>
            <p className="mt-4 text-xl text-center font-semibold">{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;