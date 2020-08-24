# AtCoder Beginner Contest 076
## C - Dubious Document 2
```cpp
#include <iostream>

using namespace std;

int main() {
    string s_prime, t;
    cin >> s_prime >> t;

    string s = "UNRESTORABLE";
    for (int i = 0; i + static_cast<int>(t.size()) - 1 < static_cast<int>(s_prime.size()); i++) {
        string key = s_prime;
        bool restored = true;
        for (int j = 0; j < static_cast<int>(s_prime.size()); j++) {
            if (i <= j && j < i + static_cast<int>(t.size())) {
                if (key[j] == '?') {
                    key[j] = t[j - i];
                } else if (key[j] != t[j - i]) {
                    restored = false;
                }
            } else if (key[j] == '?') {
                key[j] = 'a';
            }
        }

        if (restored && (s == "UNRESTORABLE" || s > key)) {
            s = key;
        }
    }

    cout << s << endl;
}
```
