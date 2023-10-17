import { Card, Typography } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
const TABLE_HEAD = ["ID", "Name", "Email", "SignUp", "SignIn", "Action"];

const Users = () => {
  const loaderUser = useLoaderData();
  return (
    <section className="max-w-7xl mx-auto px-3 my-32">
      <Card className="h-full w-full overflow-x-scroll">
    <table className="w-full min-w-max table-auto text-left ">
      <thead>
        <tr>
          {TABLE_HEAD.map((head) => (
            <th
              key={head}
              className="border-b  border-blue-gray-100 bg-blue-gray-50 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-semibold font-raleway leading-none opacity-70"
              >
                {head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loaderUser?.map(({ name, email, creation, lastSignInTime }, index) => {
          const isLast = index === loaderUser.length - 1;
          const classes = isLast ? "p-4 border border-blue-gray-200" : "p-4 border border-blue-gray-200";

          return (
            <tr key={name}>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {index+1}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {name}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {email}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {creation}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {lastSignInTime}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                >
                  Edit
                </Typography>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </Card>
    </section>
  )
}

export default Users