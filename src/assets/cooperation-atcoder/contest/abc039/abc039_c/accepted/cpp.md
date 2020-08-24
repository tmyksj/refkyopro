# AtCoder Beginner Contest 039
## C - ピアニスト高橋君
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string piano = "WBWBWWBWBWBWWBWBWWBWBWBW";
    string note[] = { "Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "So", "So#", "La", "La#", "Si" };

    string s;
    cin >> s;

    int pos;
    for (int i = 0; i < 12; i++) {
        bool match = true;
        for (int j = 0; j < 12; j++) {
            if (piano[i + j] != s[j]) {
                match = false;
            }
        }

        if (match) {
            pos = i;
            break;
        }
    }

    cout << note[pos] << endl;
}
```
