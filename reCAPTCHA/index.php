<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $recaptcha = $_POST['g-recaptcha-response'];

    $secretKey = "ISI_DENGAN_SECRET_KEY_KAMU";
    $verifyUrl = "https://www.google.com/recaptcha/api/siteverify";

    // Verifikasi reCAPTCHA ke Google
    $response = file_get_contents($verifyUrl . "?secret=" . $secretKey . "&response=" . $recaptcha);
    $responseKeys = json_decode($response, true);

    if (intval($responseKeys["success"]) !== 1) {
        echo "<script>alert('Verifikasi reCAPTCHA gagal. Coba lagi.');history.back();</script>";
        exit;
    }

    // Jika lolos verifikasi
    echo "<script>alert('Pesan berhasil dikirim!');</script>";
}
?>
