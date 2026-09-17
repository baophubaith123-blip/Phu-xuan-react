// TicketCounter.tsx — Bộ đếm số lượng vé có giới hạn

import { useState } from 'react';

interface TicketCounterProps {
  price: number;  // Đơn giá vé (VNĐ)
}

function TicketCounter({ price }: TicketCounterProps) {
  // ✅ State cục bộ — số lượng vé, khởi tạo = 1
  const [quantity, setQuantity] = useState(1);

  // Giảm — không cho xuống dưới 1
  function handleDecrease() {
    setQuantity((prev) => Math.max(1, prev - 1));
  }

  // Tăng — không cho vượt quá 10
  function handleIncrease() {
    setQuantity((prev) => Math.min(10, prev + 1));
  }

  // Tính tổng tiền
  const totalPrice = price * quantity;

  return (
    <div className="ticket-counter">
      <p className="ticket-counter__label">🎫 Đặt vé tham quan</p>

      <div className="ticket-counter__controls">
        <button
          onClick={handleDecrease}
          disabled={quantity <= 1}
          aria-label="Giảm số lượng"
        >
          −
        </button>

        <span className="ticket-counter__quantity">{quantity}</span>

        <button
          onClick={handleIncrease}
          disabled={quantity >= 10}
          aria-label="Tăng số lượng"
        >
          +
        </button>
      </div>

      <p className="ticket-counter__total">
        Tổng tiền: <strong>{totalPrice.toLocaleString('vi-VN')} đ</strong>
      </p>
    </div>
  );
}

export default TicketCounter;