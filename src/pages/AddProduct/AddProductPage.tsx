import React, { useState } from "react";
import { Container } from "./AddProductStyle";
import Select from "../../components/Select/Select";
import BaseButton from "../../components/Common/Buttons/BaseButton";
import {
  Control,
  Controller,
  Field,
  SubmitHandler,
  useFieldArray,
  useForm,
  UseFormRegister,
} from "react-hook-form";
interface PropsProductInformation {
  control: Control<FormValues> | undefined;
  register: UseFormRegister<FormValues>;
}

type FormValues = {
  productName: string;
  category: string;
  description: string;
  condition: "new" | "second";
  price: number;
  minimumOrder: number;
  productImages: {
    image: string;
  }[];
  videoUrl: string;
  isActive: boolean;
  stock: number;
  weight: number;
  productEvent: "Regular" | "SlivaPay" | "SlivaSale";
  sizes: {
    long: number;
    wide: number;
    tall: number;
  };
  shippingInsurance: "Must" | "Optional";
  deliveryService: "Standard" | "Custom";
};

function ProductInformation({ control, register }: PropsProductInformation) {
  return (
    <div className="product-box">
      <div className="product-header">
        <h2>Product Information</h2>
        <p>
          Make sure the product does not violate Intellectual Property Rights so
          that your product is not taken down.
        </p>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Product Name</h3>
          <p>
            Product name min. 40 characters by entering the brand, product type,
            color, material or type
          </p>
          <p>
            It is recommended not to use excess capital letters, enter more than
            1 brand, and promotional words.
          </p>
          <p>
            The name{" "}
            <span
              style={{
                fontWeight: 600,
              }}
            >
              cannot be changed
            </span>{" "}
            once the product is sold.
          </p>
        </div>
        <div className="secondary">
          <input placeholder="Type Product Name" {...register("productName")} />
        </div>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Category</h3>
          <p>
            Product name min. 40 characters by entering the brand, product type,
            color, material or type
          </p>
          <p>
            It is recommended not to use excess capital letters, enter more than
            1 brand, and promotional words.
          </p>
          <p>
            The name{" "}
            <span
              style={{
                fontWeight: 600,
              }}
            >
              cannot be changed
            </span>{" "}
            once the product is sold.
          </p>
        </div>
        <div className="secondary">
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <Select
                radius="3px"
                border="1px solid #EADADA"
                values={["Pet", "Clothing"]}
                onChange={field.onChange}
                label="Select Category"
                iconEnd={<i className="fa-solid fa-chevron-down"></i>}
              />
            )}
          ></Controller>
        </div>
      </div>
    </div>
  );
}

interface ProductDetailsProps {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues> | undefined;
}

function ProductDetails({ register, control }: ProductDetailsProps) {
  const { fields, append } = useFieldArray<FormValues>({
    control,
    name: "productImages",
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [videoPreview, setVideoPreview] = useState<string | undefined>(
    undefined
  );

  const selectFiles = (event: any, index: number) => {
    console.log(event);

    if (event.target.files.length === 0) {
      return;
    }

    if (fields[index] && imagePreviews[index]) {
      const imagePreviewsCopy = [...imagePreviews];
      fields.splice(index, 1, {
        image: event.target.files[0],
        id: index.toString(),
      });
      console.log(fields);

      imagePreviewsCopy[index] = URL.createObjectURL(event.target.files[0]);
      setImagePreviews(imagePreviewsCopy);
    } else {
      append({ image: event.target.files[0] });
      console.log(fields);

      setImagePreviews((prev) => [
        ...prev,
        URL.createObjectURL(event.target.files[0]),
      ]);
    }

    // images.push(URL.createObjectURL(event.target.files[i]));

    // setImagePreviews(images);
    console.log(imagePreviews);
  };

  console.log(videoPreview);
  return (
    <div className="product-box">
      <div className="product-header">
        <h2>Product Details</h2>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Product Image</h3>
          <p>
            Image format .jpg .jpeg .png and minimum size 300 x 300px (For
            optimal images use minimum size 700 x 700 px).
          </p>
          <p>
            Select product photos or drag and drop up to 5 photos at once here.
            Upload min. 3 photos that are attractive and different from each
            other to attract the attention of buyers.
          </p>
        </div>
        <div className="images-input secondary">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <>
                {!imagePreviews[i] ? (
                  <label className="custom-file-upload" key={i}>
                    <input
                      onChange={(e) => selectFiles(e, i)}
                      type="file"
                      style={{
                        display: "none",
                      }}
                      accept="image/png, image/gif, image/jpeg"
                    />
                    <img src="/assets/add-img.png" />
                  </label>
                ) : (
                  <label key={i} style={{ cursor: "pointer" }}>
                    <input
                      onChange={(e) => selectFiles(e, i)}
                      type="file"
                      style={{
                        display: "none",
                      }}
                      accept="image/png, image/gif, image/jpeg"
                    />
                    <img
                      key={i}
                      src={imagePreviews[i]}
                      style={{
                        width: "150px",
                        height: "140px",
                        borderRadius: "3px",
                        objectFit: "cover",
                      }}
                    />
                  </label>
                )}
              </>
            ))}
        </div>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Condition</h3>
        </div>
        <Controller
          name="condition"
          control={control}
          defaultValue="new"
          render={({ field }) => (
            <div
              className="secondary conditions"
              style={{
                display: "flex",
                fontSize: "10px",
                columnGap: "1rem",
              }}
            >
              <label
                style={{
                  cursor: "pointer",
                }}
                onClick={() => field.onChange("new")}
                className={field.value === "new" ? "active" : ""}
              >
                New
              </label>
              <label
                style={{
                  cursor: "pointer",
                }}
                onClick={() => field.onChange("second")}
                className={field.value === "second" ? "active" : ""}
              >
                Second
              </label>
            </div>
          )}
        ></Controller>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Product Description</h3>
          <p>
            Make sure the product description contains a detailed explanation of
            your product so that buyers can easily understand and find your
            product.
          </p>
          <p>
            It is recommended not to include cellphone numbers, emails, etc. in
            product descriptions to protect your personal data.
          </p>
        </div>
        <div className="secondary">
          <textarea
            {...register("description")}
            className="description-textarea"
            placeholder="Type product description here"
          ></textarea>
        </div>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Product Video</h3>
          <p>
            Make sure the product description contains a detailed explanation of
            your product so that buyers can easily understand and find your
            product.
          </p>
          <p>
            It is recommended not to include cellphone numbers, emails, etc. in
            product descriptions to protect your personal data.
          </p>
        </div>
        <div className=" secondary">
          {videoPreview ? (
            <>
              <video style={{ width: "50%", height: "200px" }} controls>
                <source src={videoPreview} type="video/mp4" />
              </video>
              <Controller
                name="videoUrl"
                control={control}
                render={({ field }) => (
                  <button
                    onClick={() => {
                      setVideoPreview(undefined);
                      field.onChange("");
                    }}
                  >
                    Delete
                  </button>
                )}
              ></Controller>
            </>
          ) : (
            <Controller
              name="videoUrl"
              control={control}
              render={({ field }) => (
                <label className="video-upload">
                  <input
                    type="file"
                    onChange={(e: any) => {
                      console.log(e.target.files[0]);
                      field.onChange(e?.target?.files[0]);
                      setVideoPreview(URL.createObjectURL(e.target.files[0]));
                    }}
                    accept="video/mp4,video/x-m4v,video/*"
                  />
                  <div>
                    <i className="fa-solid fa-plus"></i>
                    Add Video URL
                  </div>
                </label>
              )}
            ></Controller>
          )}
        </div>
      </div>
    </div>
  );
}
interface ProductPriceProps {
  control: Control<FormValues>;
}

function ProductPrice({ control }: ProductPriceProps) {
  return (
    <div className="product-box">
      <div className="product-header">
        <h2>Price</h2>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Minimum Order</h3>
          <p>Set a minimum amount that must be purchased for this product.</p>
        </div>
        <div className="secondary">
          <Controller
            name="minimumOrder"
            control={control}
            render={({ field }) => (
              <input type="number" min={1} onChange={field.onChange} />
            )}
          ></Controller>
        </div>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Unit Price</h3>
        </div>
        <div className="secondary">
          <div className="input-price">
            <div className="currency">Rp</div>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <input type="number" min={1} onChange={field.onChange} />
              )}
            ></Controller>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductManagement({ control }: { control: Control<FormValues> }) {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="product-box">
      <div className="product-header">
        <h2>Product Management</h2>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Product Status</h3>
        </div>
        <div className="secondary switch-wrapper">
          <Controller
            name="isActive"
            control={control}
            render={({ field }) => (
              <div
                className={`switch ${field.value ? "active" : ""}`}
                onClick={() => {
                  field.onChange(isActive);
                  setIsActive((prev) => !prev);
                }}
              >
                <div className={`circle `}></div>
              </div>
            )}
          ></Controller>

          <p>Active</p>
        </div>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Product Stock</h3>
        </div>
        <div className="secondary">
          <Controller
            name="stock"
            control={control}
            render={({ field }) => (
              <input type="number" min={1} onChange={field.onChange} />
            )}
          ></Controller>
        </div>
      </div>
    </div>
  );
}

function ProductEvent({ control }: { control: Control<FormValues> }) {
  const [productEvent, setProductEvent] = useState("Regular");

  return (
    <div className="product-box">
      <div className="product-header">
        <h2>Product Event</h2>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Product Status</h3>
        </div>

        <div
          className="secondary"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className=" radio-boxes">
            <div className="choice">
              <div className="radio-box">
                <Controller
                  control={control}
                  name="productEvent"
                  render={({ field }) => (
                    <input
                      type="radio"
                      onChange={(e) => {
                        setProductEvent(e.target.value);
                        field.onChange("Regular");
                      }}
                      checked={field.value === "Regular"}
                    />
                  )}
                />
                <p>Regular</p>
              </div>
              <p>
                You{" "}
                <span
                  style={{
                    fontWeight: 700,
                  }}
                >
                  require
                </span>{" "}
                buyers to activate shipping insurance
              </p>
            </div>
            <div className="choice">
              <div className="radio-box">
                <Controller
                  control={control}
                  name="productEvent"
                  render={({ field }) => (
                    <input
                      type="radio"
                      value="SlivaSale"
                      onChange={(e) => {
                        setProductEvent(e.target.value);

                        field.onChange("SlivaSale");
                      }}
                      checked={field.value === "SlivaSale"}
                    />
                  )}
                />
                <p>SlivaSale</p>
              </div>
              <p>SlivaSale Promotion</p>
            </div>
            <div className="choice">
              <div className="radio-box">
                <Controller
                  control={control}
                  name="productEvent"
                  render={({ field }) => (
                    <input
                      type="radio"
                      value="SlivaPay"
                      onChange={(e) => {
                        setProductEvent(e.target.value);

                        field.onChange("SlivaPay");
                      }}
                      checked={field.value === "SlivaPay"}
                    />
                  )}
                />
                <p>SlivaPay</p>
              </div>
              <p>SlivaPay Promotion</p>
            </div>
          </div>
          {productEvent === "SlivaPay" || productEvent === "SlivaSale" ? (
            <>
              <div className="promo-banner">
                <h5>
                  The promo is only active during the slivaPay event period
                </h5>
                <p>
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                </p>
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  columnGap: "1rem",
                }}
              >
                <div>
                  <p style={{ fontSize: "10px", marginBottom: ".5rem" }}>
                    Cashback
                  </p>
                  <div className="input-price">
                    <div className="currency">Rp</div>

                    <input
                      type="number"
                      min={1}
                      readOnly
                      placeholder="50.000"
                    />
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "10px", marginBottom: ".5rem" }}>
                    Discount
                  </p>
                  <div className="input-price">
                    <div className="currency">Rp</div>

                    <input type="number" min={1} readOnly placeholder="10%" />
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ProductWeight({ control }: { control: Control<FormValues> }) {
  const [shipping, setShipping] = useState<"Must" | "Optional">("Must");
  const [delivery, setDelivery] = useState<"Standard" | "Custom">("Standard");
  return (
    <div className="product-box">
      <div className="product-header">
        <h2>Weight & Shipping</h2>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Product Weight</h3>
          <p>
            Enter the weight by weighing the product{" "}
            <span
              style={{
                fontWeight: 700,
              }}
            >
              after it is packaged.
            </span>
          </p>
        </div>
        <div className="secondary">
          <div className="product-weight-input">
            <Controller
              name="weight"
              control={control}
              render={({ field }) => (
                <input
                  type="number"
                  placeholder="Product Weight"
                  onChange={field.onChange}
                />
              )}
            ></Controller>
            <div className="gram">gram</div>
          </div>
          <div className="warning">
            Pay close attention to the weight of the product so that there are
            no data differences with the courier.
          </div>
        </div>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Product Size</h3>
          <p>
            Enter the size of the product{" "}
            <span
              style={{
                fontWeight: 700,
              }}
            >
              after it is packaged
            </span>{" "}
            to calculate the unit weight
          </p>
        </div>
        <div className="secondary sizes-input">
          <div className="product-weight-input">
            <Controller
              name="sizes.long"
              control={control}
              render={({ field }) => (
                <input
                  type="number"
                  placeholder="Product Weight"
                  onChange={field.onChange}
                />
              )}
            ></Controller>
            <div className="gram">cm</div>
          </div>
          <div className="product-weight-input">
            <Controller
              name="sizes.wide"
              control={control}
              render={({ field }) => (
                <input
                  onChange={field.onChange}
                  type="number"
                  placeholder="Wide"
                />
              )}
            ></Controller>
            <div className="gram">cm</div>
          </div>
          <div className="product-weight-input">
            <Controller
              name="sizes.tall"
              control={control}
              render={({ field }) => (
                <input
                  onChange={field.onChange}
                  type="number"
                  placeholder="Tall"
                />
              )}
            ></Controller>
            <div className="gram">cm</div>
          </div>
        </div>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Shipping Insurance</h3>
          <p>
            Responsible for product returns & postage for sellers and buyers in
            the event of damage/loss during shipping
          </p>
        </div>
        <div
          className="secondary"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className=" radio-boxes">
            <div className="choice">
              <div className="radio-box">
                <Controller
                  name="shippingInsurance"
                  control={control}
                  render={({ field }) => (
                    <input
                      onChange={() => {
                        setShipping("Must");
                        field.onChange("Must");
                      }}
                      type="radio"
                      checked={field.value === "Must"}
                    />
                  )}
                ></Controller>
                <p>Must</p>
              </div>
              <p>
                You{" "}
                <span
                  style={{
                    fontWeight: 700,
                  }}
                >
                  require
                </span>{" "}
                buyers to activate shipping insurance
              </p>
            </div>
            <div className="choice">
              <div className="radio-box">
                <Controller
                  name="shippingInsurance"
                  control={control}
                  render={({ field }) => (
                    <input
                      onChange={() => {
                        setShipping("Optional");
                        field.onChange("Optional");
                      }}
                      type="radio"
                      checked={field.value === "Optional"}
                    />
                  )}
                ></Controller>
                <p>Optional</p>
              </div>
              <p>
                You give the buyer the option to activate shipping insurance
              </p>
            </div>
          </div>
          {shipping === "Optional" ? (
            <div className="promo-banner">
              <h5>
                Resiko jika pembeli tidak mengaktifkan Asuransi Pengiriman
              </h5>
              <p>
                In case of damage/loss during shipping, seller does not get full
                refund for product & postage, only replacement{" "}
                <span style={{ fontWeight: 700 }}>max. postage 10x.</span>
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="product-fill">
        <div className="text">
          <h3>Delivery Service</h3>
          <p>Arrange delivery services according to your product type.</p>
        </div>
        <div className="secondary" style={{ display:"flex",flexDirection:"column" }}>
          <div className="radio-boxes">
            <div className="choice">
              <div className="radio-box">
                <Controller
                  name="deliveryService"
                  control={control}
                  render={({ field }) => (
                    <input
                      onChange={() => {
                        setDelivery("Standard");
                        field.onChange("Standard");
                      }}
                      type="radio"
                      checked={field.value === "Standard"}
                    />
                  )}
                ></Controller>
                <p>Standard</p>
              </div>
              <p>
                The shipping service for this product will be the same as the
                one in{" "}
                <span style={{ fontWeight: 700 }}>Shipping Settings.</span>
              </p>
            </div>
            <div className="choice">
              <div className="radio-box">
                <Controller
                  name="deliveryService"
                  control={control}
                  render={({ field }) => (
                    <input
                      onChange={() => {
                        setDelivery("Custom");
                        field.onChange("Custom");
                      }}
                      type="radio"
                      checked={field.value === "Custom"}
                    />
                  )}
                ></Controller>
                <p>Custom</p>
              </div>
            </div>
          </div>
          <div style={{fontSize:"10px",color:"#4b4545",marginTop:"1rem"}}>
              <p style={{fontWeight:700}}>Transfer to Agent Office</p>
              <p>Take the order to the nearest agent's office and ask for a receipt from the clerk.</p>
          </div>
          <div className="shippingOption">
            <input type="checkbox" />
            <img src="/assets/jne.png" />
            <div className="text">
              <p style={{fontWeight:700,fontSize:"12px"}}>JNE</p>
              <p>JNE Trucking</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const AddProductPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    control,
  } = useForm<FormValues>();

  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: "productImages",
  });

  console.log(fields);
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  // const selectFiles = (event: any, index: number) => {
  //   console.log(event);

  //   if (images[index] && imagePreviews[index]) {
  //     const imagePreviewsCopy = [...imagePreviews];
  //     append({ image:event.target.files[0] })
  //     const updatedFields = [...fields];
  //     updatedFields.splice(index, 1, { id:index.toString(),image:event.target.files[0] });
  //   updateFields(updatedFields);
  //     imagePreviewsCopy[index] = URL.createObjectURL(event.target.files[0]);
  //     setImagePreviews(imagePreviewsCopy);
  //   } else {
  //     setImages((prev) => [...prev, event.target.files[0]]);
  //     setImagePreviews((prev) => [
  //       ...prev,
  //       URL.createObjectURL(event.target.files[0]),
  //     ]);
  //   }

  //   // images.push(URL.createObjectURL(event.target.files[i]));

  //   // setImagePreviews(images);
  //   console.log(images);
  //   console.log(imagePreviews);
  // };
  //   const updateFields = (updatedFields: any[]) => {
  //   updatedFields.forEach((item, index) => {
  //     control.setValue(`images[${index}].file`, item.file);
  //   });
  // };

  return (
    <Container>
      <form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="header-text">Add Product</h1>
        <ProductInformation register={register} control={control} />

        <ProductDetails register={register} control={control} />
        <ProductPrice control={control} />
        <ProductManagement control={control} />
        <ProductEvent control={control} />
        <ProductWeight control={control} />
        <div className="action-btns">
          <button>Cancel</button>
          <button>Save & Add New</button>
          <button className="colored">Save</button>
        </div>
      </form>
    </Container>
  );
};

export default AddProductPage;
