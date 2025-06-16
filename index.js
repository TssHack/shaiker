const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000; // پورت مورد نظر برای اجرای API

// مسیر API برای دریافت اطلاعات Nobitex
app.get('/USDTIRT', async (req, res) => {
    const nobitexApiUrl = 'https://api.nobitex.ir/v2/orderbook/USDTIRT';

    try {
        const response = await axios.get(nobitexApiUrl);
        // ارسال خروجی وب‌سرویس Nobitex به عنوان پاسخ API
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Nobitex API:', error.message);
        // ارسال خطای مناسب در صورت عدم موفقیت
        res.status(500).json({
            error: 'Failed to fetch data from Nobitex API',
            details: error.message
        });
    }
});

// اجرای سرور
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access the API at http://localhost:${PORT}/USDTIRT`);
});
