import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import * as ReactRedux from "react-redux";
import UploadImage from "./UploadImage";

Enzyme.configure({ adapter: new Adapter() });

describe("UploadImage Test", () => {
  const useSelectorMock = jest.spyOn(ReactRedux, "useSelector");
  jest.spyOn(ReactRedux, "useDispatch");

  test("UploadImage Call Correctly", () => {
    useSelectorMock.mockReturnValue([]);
    const wrapper = shallow(<UploadImage />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
