# M-SOLUTIONS プロコンオープン
## B - Sumo
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    int k = static_cast<int>(s.size());

    int cnt = 0;
    for (int i = 0; i < k; i++) {
        if (s[i] == 'o') {
            cnt++;
        }
    }

    cout << (15 - k >= 8 - cnt ? "YES" : "NO") << endl;
}
```
