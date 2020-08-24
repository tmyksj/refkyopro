# AtCoder Beginner Contest 004
## C - 入れ替え
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<string> c(1, "123456");
    for (int i = 0; ; i++) {
        string s = c[c.size() - 1];
        swap(s[i % (c[0].size() - 1)], s[i % (c[0].size() - 1) + 1]);

        if (s == c[0]) {
            break;
        } else {
            c.push_back(s);
        }
    }

    cout << c[n % c.size()] << endl;
}
```
