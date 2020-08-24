# diverta 2019 Programming Contest 2
## C - Successive Subtraction
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<int> r(a);
    sort(r.begin(), r.end());

    vector<int> x(0), y(0);
    for (vector<int>::iterator i = (r[0] < 0 ? lower_bound(r.begin(), r.end(), 0) : r.begin() + 1); i != r.end(); i++) {
        if (i + 1 == r.end()) {
            x.push_back(*i);
            y.push_back(r[0]);
            r[0] = *i - r[0];
        } else {
            x.push_back(r[0]);
            y.push_back(*i);
            r[0] = r[0] - *i;
        }
    }

    sort(r.begin(), lower_bound(r.begin(), r.end(), 0), greater<int>());
    for (vector<int>::iterator i = r.begin() + 1; *i < 0; i++) {
        x.push_back(r[0]);
        y.push_back(*i);
        r[0] = r[0] - *i;
    }

    cout << r[0] << endl;
    for (int i = 0; i < n - 1; i++) {
        cout << x[i] << " " << y[i] << endl;
    }
}
```
