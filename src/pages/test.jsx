import ZodiacInfo from "../components/ui/zodiacinfo";
import UserUpdate from "../components/ui/userUpdate";
import ProfileTest from "../components/ui/testLog/profiletest";

const TestPage = () => {
  return (
    <div className="max-w-screen-lg p-4 mx-auto">
      <UserUpdate />
      <ProfileTest/>
    </div>
  );
};

export default TestPage;
