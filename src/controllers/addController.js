const addNumbers = (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Both num1 and num2 should be numbers' });
    }

    const result = num1 + num2;
    res.json({ result });
};

module.exports = addNumbers;