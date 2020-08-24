# AtCoder Beginner Contest 071
## B - Not Found
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s;
    cin >> s;

    vector<bool> chr(26, true);
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        chr[s[i] - 'a'] = false;
    }

    bool flag = false;
    for (int i = 0; i < 26; i++) {
        if (chr[i]) {
            flag = true;
            cout << static_cast<char>(i + 'a') << endl;
            break;
        }
    }

    if (!flag) {
        cout << "None" << endl;
    }
}
```
