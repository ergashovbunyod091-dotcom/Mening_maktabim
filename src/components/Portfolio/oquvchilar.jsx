
import { useState } from "react";
import React from "react";
import "./Oquvchilar.css";
const students = [
  {
    id: 1,
    name: "Aliyorov Elshod Elyor O‘g‘li",
    tugilganYili: 2014,
    ortachaBaho: 4,
    qiziqadiganFan: "Informatika",
  },
  {
    id: 2,
    name: "Amrilloyeva Durdona G‘aybullo Qizi",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Biologiya",
  },
  {
    id: 3,
    name: "Anvarov Alisher Azamat O‘g‘li",
    tugilganYili: 2013,
    ortachaBaho: 4,
    qiziqadiganFan: "Informatika",
  },
  {
    id: 4,
    name: "Baxritdinov Ayub Ibrohim O‘g‘li",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Informatika va tarix",
  },
  {
    id: 5,
    name: "Baxtiyorova Sitorabegim Yunus Qizi",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Biologiya",
  },
  {
    id: 6,
    name: "Dehqonov Asadbek Jo‘rabek O‘g‘li",
    tugilganYili: 2014,
    ortachaBaho: 5,
    qiziqadiganFan: "Matematika",
  },
  {
    id: 7,
    name: "Dilmurodova Shahruza Nodirbek Qizi",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Fransuz tili",
  },
  {
    id: 8,
    name: "Ergashov Bunyodbek Firuz O‘g‘li",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Matematika",
  },
  {
    id: 9,
    name: "Ergashova Mehribonu Sanjar Qizi",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Fransuz tili",
  },
  {
    id: 10,
    name: "Hamdamov Usmonjon O‘ktam O‘g‘li",
    tugilganYili: 2013,
    ortachaBaho: 4,
    qiziqadiganFan: "Jismoniy tarbiya",
  },
  {
    id: 11,
    name: "Ismoilov Subhonjon Sanjar O‘g‘li",
    tugilganYili: 2013,
    ortachaBaho: 4,
    qiziqadiganFan: "Kimyo va biologiya",
  },
  {
    id: 12,
    name: "Mehriddinova Anora Jo‘rabek Qizi",
    tugilganYili: 2013,
    ortachaBaho: 4,
    qiziqadiganFan: "Biologiya",
  },
  {
    id: 13,
    name: "Muxammadova Marjona Marat Qizi",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Matematika",
  },
  {
    id: 14,
    name: "Nasulloyev Hojiakbar Oybek O‘g‘li",
    tugilganYili: 2013,
    ortachaBaho: 4,
    qiziqadiganFan: "Biologiya",
  },
  {
    id: 15,
    name: "Obidova Zarnigor Bobir Qizi",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Tarix",
  },
  {
    id: 16,
    name: "Qodirova Gulsanambonu Oxunjon Qizi",
    tugilganYili: 2013,
    ortachaBaho: 4,
    qiziqadiganFan: "Tarix",
  },
  {
    id: 17,
    name: "Rasulova Dinora Lochinjon Qizi",
    tugilganYili: 2014,
    ortachaBaho: 5,
    qiziqadiganFan: "Matematika",
  },
  {
    id: 18,
    name: "Ravshanova Maftuna Azizbek Qizi",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Fransuz tili",
  },
  {
    id: 19,
    name: "Ro‘ziyeva Nozaninbonu Jo‘rabek Qizi",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Tarix",
  },
  {
    id: 20,
    name: "Salomova Gulhida Ixtiyor Qizi",
    tugilganYili: 2013,
    ortachaBaho: 4,
    qiziqadiganFan: "Texnologiya",
  },
  {
    id: 21,
    name: "Savriyev Sheroz Zavqiddin O‘g‘li",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Matematika",
  },
  {
    id: 22,
    name: "Xayrilloyev Asadbek Jahongir O‘g‘li",
    tugilganYili: 2013,
    ortachaBaho: 4,
    qiziqadiganFan: "Matematika",
  },
  {
    id: 23,
    name: "Shomurodov Narzullo Zavqiddin O‘g‘li",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Matematika",
  },
  {
    id: 24,
    name: "Рамазонов Достонбек Рустамович",
    tugilganYili: 2013,
    ortachaBaho: 5,
    qiziqadiganFan: "Rus tili",
  },
];

export default function Oquvchilar() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="students-page">
      <div className="students-header">
        <h1>7-A sinf o‘quvchilari</h1>
        <p>25-maktab • O‘quvchilar haqida ma’lumot</p>
        <div className="students-count">
          Jami o‘quvchilar: {students.length} nafar
        </div>
      </div>

      <div className="students-list">
        {students.map((student) => (
          <button
            key={student.id}
            className={`student-item ${
              selected?.id === student.id ? "active" : ""
            }`}
            onClick={() =>
              setSelected(
                selected?.id === student.id ? null : student
              )
            }
          >
            <span className="student-number">
              {String(student.id).padStart(2, "0")}
            </span>

            <span className="student-name">{student.name}</span>

            <span className="student-arrow">→</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="student-details">
          <h2>O‘quvchi haqida ma’lumot</h2>

          <div className="student-detail-row">
            <span>Ism-familiyasi:</span>
            <strong>{selected.name}</strong>
          </div>

          <div className="student-detail-row">
            <span>Tug‘ilgan yili:</span>
            <strong>{selected.tugilganYili}-yil</strong>
          </div>

          <div className="student-detail-row">
            <span>O‘rtacha bahosi:</span>
            <strong>{selected.ortachaBaho}</strong>
          </div>

          <div className="student-detail-row">
            <span>Qiziqadigan fani:</span>
            <strong>{selected.qiziqadiganFan}</strong>
          </div>

          <button
            className="student-close"
            onClick={() => setSelected(null)}
          >
            Yopish
          </button>
        </div>
      )}
    </div>
  );
}
