<?php
header('Content-Type: application/json');

// Adatok fogadása a JavaScript kérésből
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || empty($data['name']) || empty($data['email']) || empty($data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Minden mezőt ki kell tölteni!']);
    exit;
}

$file = 'felhasznalok.json';

// Eddigi felhasználók beolvasása a JSON fájlból
$users = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

// Ellenőrzés: létezik-e már az e-mail cím?
foreach ($users as $u) {
    if (strtolower($u['email']) === strtolower($data['email'])) {
        echo json_encode(['success' => false, 'message' => 'Ezzel az e-mail címmel már regisztráltak!']);
        exit;
    }
}

// Új felhasználó hozzáadása
$newUser = [
    'name' => trim($data['name']),
    'email' => strtolower(trim($data['email'])),
    'password' => $data['password']
];

$users[] = $newUser;

// Fájlba mentése szépen formázott JSON-ként
if (file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
    echo json_encode(['success' => true, 'message' => 'Sikeres regisztráció!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Hiba történt a fájl mentése során.']);
}
?>