import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';

const ProductDetailsCard = ({coffee}) => {
  const {coffeeName, supplier, category, chef, taste, details, photo} = coffee;
  return (
    <Card className="w-full flex-col md:flex-row md:items-center">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full md:w-2/5 shrink-0 rounded-r-none flex justify-center md:justify-start"
      >
        <img
          src={photo}
          alt={`photo of the ${coffeeName}`}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h2" color="#331A15"  className="mb-8  text-shadow font-roncho text-4xl">
          Niceties
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-base md:text-xl">
          <span className="text-[#1B1A1A]">Name:</span> <span className="text-gray-600">{coffeeName}</span>
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-base md:text-xl">
          <span className="text-[#1B1A1A]">Chef:</span> <span className="text-gray-600">{chef}</span>
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-base md:text-xl">
          <span className="text-[#1B1A1A]">Supplier:</span> <span className="text-gray-600">{supplier}</span>
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-base md:text-xl">
          <span className="text-[#1B1A1A]">Taste:</span> <span className="text-gray-600">{taste}</span>
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-base md:text-xl">
          <span className="text-[#1B1A1A]">Category:</span> <span className="text-gray-600">{category}</span>
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-base md:text-xl">
          <span className="text-[#1B1A1A]">Details:</span> <span className="text-gray-600">{details}</span>
        </Typography>
      </CardBody>
    </Card>
  )
}

ProductDetailsCard.propTypes = {
  coffee: PropTypes.object.isRequired,
}

export default ProductDetailsCard