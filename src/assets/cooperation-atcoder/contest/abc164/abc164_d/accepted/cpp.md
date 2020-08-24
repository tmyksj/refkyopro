# AtCoder Beginner Contest 164
## D - Multiple of 2019
```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    map<int, int> m;
    m[0] = 1;

    long long res = 0;
    for (int i = s.size() - 1, j = 1, k = 0; i >= 0; i--, j *= 10, j %= 2019) {
        k = ((s[i] - '0') * j + k) % 2019;
        res += m[k];
        m[k]++;
    }

    cout << res << endl;
}
```
