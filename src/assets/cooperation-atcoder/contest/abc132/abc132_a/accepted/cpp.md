# AtCoder Beginner Contest 132
## A - Fifty-Fifty
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s;
    cin >> s;

    vector<int> count(26, 0);
    for (int i = 0; i < 4; i++) {
        count[s[i] - 'A']++;
    }

    int cnt2 = 0;
    for (int i = 0; i < 26; i++) {
        if (count[i] == 2) {
            cnt2++;
        }
    }

    cout << (cnt2 == 2 ? "Yes" : "No") << endl;
}
```
