# AtCoder Beginner Contest 120
## C - Unification
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s;
    cin >> s;

    vector<int> sv(0);
    for (int i = 1, l = 0; i <= static_cast<int>(s.size()); i++) {
        if (i == static_cast<int>(s.size()) || s[l] != s[i]) {
            sv.push_back(i - l);
            l = i;
        }
    }

    int cnt = 0;
    while (static_cast<int>(sv.size()) >= 2) {
        if (sv[0] < sv[1]) {
            cnt += 2 * sv[0];
            sv[1] -= sv[0];
            sv.erase(sv.begin());
        } else if (sv[0] == sv[1]) {
            cnt += 2 * sv[0];
            sv.erase(sv.begin());
            sv.erase(sv.begin());
        } else {
            cnt += 2 * sv[1];
            sv[0] -= sv[1];
            sv.erase(sv.begin() + 1);

            if (sv.size() >= 2) {
                sv[0] += sv[1];
                sv.erase(sv.begin() + 1);
            }
        }
    }

    cout << cnt << endl;
}
```
