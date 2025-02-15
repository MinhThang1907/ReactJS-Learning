import { DownOutlined } from "@ant-design/icons";
import { nav } from "../../category";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Dropdown, MenuProps } from "antd";

export const Nav = () => {
  const [isSelect, setIsSelect] = useState<number>(0);
  const [moreItems, setMoreItems] = useState<MenuProps["items"]>([]);

  useEffect(() => {
    setMoreItems(
      nav()
        .filter((item) => item.id > 4)
        .map((item) => {
          return {
            label: item.title,
            key: item.id,
          };
        })
    );
  }, []);

  return (
    <ul className="flex">
      {nav().map((item, index) =>
        index <= 3 ? (
          <li key={item.id}>
            <Link
              to={item.route}
              className={clsx({
                "block py-1.5 px-3 text-center hover:text-[#6b6b6b] font-medium":
                  true,
                "text-[#8c8c8c]": isSelect !== item.id,
                "text-[#6b6b6b]": isSelect === item.id,
              })}
              onClick={() => setIsSelect(item.id)}
            >
              {item.title}
            </Link>
          </li>
        ) : (
          ""
        )
      )}
      <Dropdown menu={{ items: moreItems }} trigger={["click"]}>
        <li key="more">
          <span className="block cursor-pointer py-1.5 px-3 text-center text-[#ca5c3b] hover:text-[#b14a2b] font-medium">
            More <DownOutlined />
          </span>
        </li>
      </Dropdown>
    </ul>
  );
};
