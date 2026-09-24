<?php
header('Content-Type: application/json');

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || empty($data['email']) || empty($data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Adja meg az e-mail címet és a jelszót!']);
    exit;
}

$file = 'felhasznalok.json';
$users = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

$foundUser = null;

// Felhasználó keresése
foreach ($users as $u) {
    if (strtolower($u['email']) === strtolower($data['email']) && $u['password'] === $data['password']) {
        $foundUser = $u;
        break;
    }
}

if ($foundUser) {
    echo json_encode([
        'success' => true,
        'message' => 'Sikeres bejelentkezés!',
        'user' => [
            'name' => $foundUser['name'],
            'email' => $foundUser['email']
        ]
    ]);
} else {
    echo json_encode(['success' => false, 'message' => 'Hibás e-mail cím vagy jelszó!']);
}
?>