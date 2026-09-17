// FormGopY.tsx — Form góp ý (dùng lại hook useForm)
// Buổi 8 · Lab 4: Chứng minh hook tái sử dụng được
// INT.7.18 — Web FrontEnd nâng cao

import { useForm } from '../../hooks/useForm';

interface DuLieuGopY {
  hoTen: string;
  noiDung: string;
}

const GIA_TRI_BAN_DAU: DuLieuGopY = {
  hoTen: '',
  noiDung: '',
};

// ✅ Hàm kiểm chứng RIÊNG cho form góp ý
function kiemChungGopY(d: DuLieuGopY): Record<string, string> {
  const loi: Record<string, string> = {};
  if (!d.hoTen.trim()) {
    loi.hoTen = 'Vui lòng nhập họ tên.';
  }
  if (d.noiDung.trim().length < 10) {
    loi.noiDung = 'Góp ý cần ít nhất 10 ký tự.';
  }
  return loi;
}

export default function FormGopY() {
  // ✅ Dùng lại CÙNG hook useForm — nhưng với dữ liệu và kiểm chứng khác
  const {
    duLieu,
    dangGui,
    xuLyThayDoi,
    xuLyRoiO,
    loiCuaO,
    xuLyGui,
    datLai,
  } = useForm(GIA_TRI_BAN_DAU, kiemChungGopY);

  const gui = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 800)); // Giả lập 0.8s
    alert('Cảm ơn góp ý của ' + gt.hoTen);
    datLai();
  });

  return (
    <form className="form-gop-y" onSubmit={gui} noValidate>
      <h2>Gửi góp ý về địa điểm</h2>

      {/* Ô Họ tên */}
      <div className="truong">
        <label htmlFor="hoTen">Họ và tên</label>
        <input
          id="hoTen"
          name="hoTen"
          type="text"
          value={duLieu.hoTen}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          placeholder="Ví dụ: Nguyễn Văn An"
          aria-invalid={loiCuaO('hoTen') ? true : undefined}
        />
        {loiCuaO('hoTen') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('hoTen')}
          </p>
        )}
      </div>

      {/* Ô Nội dung góp ý */}
      <div className="truong">
        <label htmlFor="noiDung">Nội dung góp ý</label>
        <textarea
          id="noiDung"
          name="noiDung"
          rows={5}
          value={duLieu.noiDung}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          placeholder="Chia sẻ cảm nhận, đề xuất cải thiện…"
          aria-invalid={loiCuaO('noiDung') ? true : undefined}
        />
        {loiCuaO('noiDung') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('noiDung')}
          </p>
        )}
      </div>

      {/* Nhóm nút */}
      <div className="nhom-nut">
        <button type="submit" disabled={dangGui}>
          {dangGui ? 'Đang gửi...' : 'Gửi góp ý'}
        </button>
        <button type="button" onClick={datLai}>
          Nhập lại
        </button>
      </div>
    </form>
  );
}