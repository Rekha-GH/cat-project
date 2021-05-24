import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import TransparentButton from "./TransparentButton";

Enzyme.configure({ adapter: new Adapter() });

describe("TransparentButton Test", () => {
  test("TransparentButton Call Correctly", () => {
    const wrapper = shallow(<TransparentButton>test</TransparentButton>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("TransparentButton triggers click event", () => {
    let flg = false;
    const wrapper = shallow(
      <TransparentButton
        action={() => {
          flg = true;
        }}
      >
        test
      </TransparentButton>
    );

    wrapper.find("button").simulate("click");

    expect(flg).toBe(true);
  });
});
