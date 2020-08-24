# AtCoder Beginner Contest 171
## C - One Quadrillion and One Dalmatians
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n;
    cin >> n;

    vector<char> r(0);
    for (long long i = n; i > 0; i = (i - 1) / 26) {
        r.push_back('a' + (i - 1) % 26);
    }

    for (int i = r.size() - 1; i >= 0; i--) {
        cout << r[i];
    }
    cout << endl;
}
```
