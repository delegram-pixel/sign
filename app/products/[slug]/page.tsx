import { products } from "@/app/data/dummyData"
import { EditOutlined, Inventory2Outlined, LocalOfferOutlined } from "@mui/icons-material"
import Image from "next/image"

interface Product {
  id: number | string
  name: string
  description?: string
}

interface PageProps {
  params: {
    slug: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}

const ProductDetailsPage = async ({ params }: PageProps) => {
  const product = products.find((product: Product) => product.id.toString() === params.slug)

  if (!product) {
    return <h1 className="text-3xl font-bold text-gray-800">Product not found!</h1>
  }

  return (
    <>
      <h1 className="mb-4 hidden text-3xl font-bold text-gray-800 md:block">Product details</h1>

      <div className="flex flex-wrap items-start gap-4">
        <div className="flex-1">
          <div className="mb-4 rounded-xl bg-white p-8 shadow-sm">
            <Image
              src="https://utfs.io/f/wLDjZbdcJHpRZf4TaQuIU7aODg2yt0HSxWFBNfqTKvI59cYP"
              alt="Product name"
              height={96}
              width={96}
              className="w-full"
            />
            <div className="mx-auto flex gap-2">
              <Image
                src="https://utfs.io/f/wLDjZbdcJHpRZf4TaQuIU7aODg2yt0HSxWFBNfqTKvI59cYP"
                alt="Product name"
                height={96}
                width={96}
                className="w-full"
              />
              <Image
                src="https://utfs.io/f/wLDjZbdcJHpRZf4TaQuIU7aODg2yt0HSxWFBNfqTKvI59cYP"
                alt="Product name"
                height={96}
                width={96}
                className="w-full"
              />
              <Image
                src="https://utfs.io/f/wLDjZbdcJHpRZf4TaQuIU7aODg2yt0HSxWFBNfqTKvI59cYP"
                alt="Product name"
                height={96}
                width={96}
                className="w-full"
              />
              <Image
                src="https://utfs.io/f/wLDjZbdcJHpRZf4TaQuIU7aODg2yt0HSxWFBNfqTKvI59cYP"
                alt="Product name"
                height={96}
                width={96}
                className="w-full"
              />
            </div>
          </div>
          <div className="rounded-xl bg-white p-8 text-sm shadow-sm">
            <h3 className="mb-2 text-base font-medium text-gray-800">PRODUCT FULL DESCRIPTION</h3>
            <p className="mb-1">
              Turn heads at the beach or poolside with this stunning Fancy Bikini, designed to combine elegance with
              comfort.
            </p>
            <p className="mb-1">
              Sophisticated Design: Featuring a chic cut and vibrant colors that flatter every body type, this bikini
              offers a blend of boldness and grace.
            </p>
            <p>
              Premium Fabric: Made from high-quality, quick-drying materials, it provides a silky-smooth feel while
              ensuring durability and breathability.
            </p>
          </div>
        </div>
        <div className="flex-[2]">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h2 className="text-2xl">{product.name}</h2>
              <p className="text-sm">PRODUCT ID: VIC2345</p>
            </div>

            <button className="flex items-center gap-1 rounded-xl bg-accent-900 px-4 py-2 text-white">
              <EditOutlined fontSize="inherit" />
              <span>Edit</span>
            </button>
          </div>

          <h3 className="mb-1 text-base font-medium text-gray-800">PRODUCT SHORT DESCRIPTION</h3>
          <p className="mb-4 text-sm">
            Turn heads at the beach or poolside with this stunning Fancy Bikini, designed to combine elegance with
            comfort. Sophisticated Design: Featuring a chic cut and vibrant colors that flatter every body type, this
            bikini offers a blend of boldness and grace. Premium Fabric: Made from high-quality, quick-drying materials,
            it provides a silky-smooth feel while ensuring durability and breathability.
          </p>

          <div className="mb-8 flex gap-4">
            <div className="flex w-48 items-center gap-2 rounded-xl bg-white p-4">
              <LocalOfferOutlined fontSize="large" className="text-accent-900" />
              <div>
                <p className="text-2xl font-bold text-gray-800">$100</p>
                <p className="text-gray-500">Price</p>
              </div>
            </div>
            <div className="flex w-48 items-center gap-2 rounded-xl bg-white p-4">
              <Inventory2Outlined fontSize="large" className="text-accent-900" />
              <div>
                <p className="text-2xl font-bold text-gray-800">275</p>
                <p className="text-gray-500">Stock available</p>
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap items-start gap-8">
            <div>
              <p className="font-medium text-gray-800">SIZE</p>
              <div className="flex flex-wrap gap-2">
                <button className="rounded-xl border px-4 py-2">S</button>
                <button className="rounded-xl border px-4 py-2">M</button>
                <button className="rounded-xl border px-4 py-2">L</button>
                <button className="rounded-xl border px-4 py-2">XL</button>
                <button className="rounded-xl border px-4 py-2">XXL</button>
              </div>
            </div>
            <div>
              <p className="font-medium text-gray-800">COLOR</p>
              <div className="flex flex-wrap gap-2">
                <button className="h-10 w-16 rounded-xl bg-red-500" />
                <button className="h-10 w-16 rounded-xl bg-green-500" />
                <button className="h-10 w-16 rounded-xl bg-blue-500" />
              </div>
            </div>
          </div>

          <p className="font-medium text-gray-800">Additional information</p>
          <table className="text-sm">
            <tr>
              <td>SHIPPING CLASS</td>
              <td></td>
            </tr>
            <tr>
              <td>SHIPPING DETAILS</td>
              <td></td>
            </tr>
            <tr>
              <td>STATUS</td>
              <td></td>
            </tr>
            <tr>
              <td>TAGS</td>
              <td></td>
            </tr>
            <tr>
              <td>WEIGHT</td>
              <td></td>
            </tr>
            <tr>
              <td>WIDTH</td>
              <td></td>
            </tr>
            <tr>
              <td>LENGTH</td>
              <td></td>
            </tr>
            <tr>
              <td>HEIGHT</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProductDetailsPage

