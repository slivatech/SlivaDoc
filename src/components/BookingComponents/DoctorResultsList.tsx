import { doctors } from "./fakeData";
import { DoctorResultStyle } from "./BookingStyle";
import BaseButton from "../Common/Buttons/BaseButton";

type DoctorProps = {
  imageSrc: string;
  name: string;
  role: string;
  venue: string;
  distance: string;
  isAvailable: boolean;
  reviewPercentage: number;
  reviewsCount: number;
  price: number;
};

const DoctorResult = ({
  doctor,
  isDoctorTab,
}: {
  doctor: DoctorProps;
  isDoctorTab: boolean;
}) => {
  return (
    <DoctorResultStyle>
      <div style={{ display: "flex", justifyContent: "space-between",alignItems:"flex-start" }}>
        <div className="firstChild">
          <img src={doctor.imageSrc} />
          <div>
            <h2>{doctor.name}</h2>
            <div className="span">
              <img src="/assets/stethoscope.svg" />
              <p>{doctor.role}</p>
            </div>
            <div className="span">
              <img src="/assets/hospital.svg" />
              <p>{doctor.venue}</p>
            </div>
            <div className="span">
              <img src="/assets/location.svg" />
              <p className=" location">{doctor.distance}</p>
            </div>
          </div>
        </div>
        <div className={`secondChild ${isDoctorTab ? "doctorTab" : null} `}>
          {isDoctorTab ? (
            <>
              <p>Ulasan Dokter</p>

              <div className="reviewContainer">
                <img src="/assets/review.svg" alt="review" />
                <p>
                  {" "}
                  <span
                    style={{ fontWeight: 700, color: "rgba(4, 29, 253,0.7)" }}
                  >
                    {doctor.reviewPercentage}%
                  </span>{" "}
                  ({doctor.reviewsCount})
                </p>
              </div>
            </>
          ) : null}

          <p>Biaya Konsultasi</p>
          <p style={{ color: "#FF0606B2", fontWeight: 700 }}>
            Rp. {doctor.price.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="scheduleContainer">
        <div className="span">
          <img src="/assets/calendar.svg" />
          <p>{doctor.isAvailable ? "Tersedia hari ini" : ""}</p>
        </div>
        <BaseButton
          width="113px"
          height="25px"
          radius="5px"
          fontSize="14px"
          color="linear-gradient(0deg,rgba(144, 170, 209, 1) 0%,rgba(82, 150, 229, 1) 100%)"
          text={isDoctorTab ? "Buat Janji" : 'Mulai Konsultasi'}
          textColor="white"
        />
      </div>
    </DoctorResultStyle>
  );
};

const DoctorResultsList = ({ isDoctorTab }: { isDoctorTab: boolean }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem",marginTop:"1rem" }}>
      {doctors.map((doctor, i) => (
        <DoctorResult
          key={i}
          doctor={doctor as typeof doctor}
          isDoctorTab={isDoctorTab}
        />
      ))}
    </div>
  );
};

export default DoctorResultsList;
