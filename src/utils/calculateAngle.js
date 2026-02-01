export function calculateAngle(targetX, targetY, compassCenter) {
    const dx = targetX - compassCenter.x;
    const dy = targetY - compassCenter.y;
    
    // Вычисляем угол относительно севера (вверх)
    // atan2 возвращает угол от оси X, нам нужен от оси Y
    const angleRad = Math.atan2(dx, -dy);
    
    // Преобразуем в градусы (0° = север, 90° = восток)
    let angleDeg = angleRad * (180 / Math.PI);
    
    // Нормализуем угол от 0 до 360
    if (angleDeg < 0) angleDeg += 360;
    
    return { angleRad, angleDeg };
}